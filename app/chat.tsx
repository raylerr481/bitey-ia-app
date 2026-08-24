import { useState } from 'react';
import { ScrollView, View, Text, TextInput, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { biteyChat } from '../services/api';

const blue = '#0b6f8a';
type Message = { role: 'user' | 'assistant'; text: string };

export default function Chat() {
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversationId, setConversationId] = useState<string>();

  async function send() {
    const value = text.trim();
    if (!value || busy) return;
    setText('');
    setMessages((current) => [...current, { role: 'user', text: value }]);
    setBusy(true);
    try {
      const result = await biteyChat(value, conversationId);
      if (result.conversation_id) setConversationId(result.conversation_id);
      setMessages((current) => [...current, { role: 'assistant', text: result.response ?? 'Recebi sua mensagem.' }]);
    } catch {
      setMessages((current) => [...current, { role: 'assistant', text: 'Não consegui conectar ao Bitey agora. Tente novamente em alguns instantes.' }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <SafeAreaView style={s.safe}>
      <View style={s.screen}>
        <View style={s.header}>
          <Pressable onPress={() => router.back()} accessibilityLabel="Voltar"><Text style={s.back}>‹</Text></Pressable>
          <View><Text style={s.title}>Bitey IA</Text><Text style={s.online}>{busy ? 'Analisando…' : 'Online'}</Text></View>
        </View>
        <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={s.messages}>
          {messages.length === 0 ? <>
            <Text style={s.empty}>¿En qué estás pensando?</Text>
            <Text style={s.hint}>Conversa directamente con Bitey a través del gateway central de BiteFixes.</Text>
          </> : messages.map((message, index) => (
            <View key={`${message.role}-${index}`} style={[s.bubble, message.role === 'user' ? s.user : s.assistant]}><Text style={s.bubbleText}>{message.text}</Text></View>
          ))}
          {busy && <ActivityIndicator color={blue} style={s.loading} />}
        </ScrollView>
        <View style={s.bottom}><View style={s.composer}>
          <Pressable style={s.tool} accessibilityLabel="Adjuntar"><Text style={s.toolText}>＋</Text></Pressable>
          <TextInput value={text} onChangeText={setText} placeholder="Escribe un mensaje..." placeholderTextColor="#8b9aa3" multiline style={s.input} />
          <Pressable style={s.send} onPress={send} disabled={busy} accessibilityLabel="Enviar mensaje"><Text style={s.sendText}>➤</Text></Pressable>
        </View></View>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' }, screen: { flex: 1 },
  header: { height: 62, borderBottomWidth: 1, borderBottomColor: '#e6eef1', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 13 },
  back: { fontSize: 32, color: blue, lineHeight: 30 }, title: { fontSize: 15, fontWeight: '800', color: '#18344d' }, online: { fontSize: 10, color: '#35ae78' },
  messages: { flexGrow: 1, justifyContent: 'center', padding: 20, gap: 8 }, empty: { fontSize: 24, fontWeight: '800', color: '#17384f', textAlign: 'center' },
  hint: { fontSize: 13, lineHeight: 20, color: '#7b8d96', textAlign: 'center', marginTop: 9, maxWidth: 330, alignSelf: 'center' },
  bubble: { maxWidth: '86%', padding: 12, borderRadius: 16 }, user: { alignSelf: 'flex-end', backgroundColor: blue }, assistant: { alignSelf: 'flex-start', backgroundColor: '#eef7f9' },
  bubbleText: { fontSize: 14, lineHeight: 20, color: '#17384f' }, loading: { alignSelf: 'flex-start', margin: 8 }, bottom: { padding: 10 },
  composer: { minHeight: 54, borderWidth: 1, borderColor: '#b9d4dc', borderRadius: 18, flexDirection: 'row', alignItems: 'center', padding: 6 },
  tool: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#eef8fa', alignItems: 'center', justifyContent: 'center' }, toolText: { fontSize: 22, color: blue },
  input: { flex: 1, minHeight: 38, maxHeight: 110, paddingHorizontal: 8, color: '#18344d', fontSize: 14 }, send: { width: 40, height: 40, borderRadius: 12, backgroundColor: blue, alignItems: 'center', justifyContent: 'center' }, sendText: { color: '#fff', fontSize: 17 },
});
