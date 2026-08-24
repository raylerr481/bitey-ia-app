import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

const blue='#0b6f8a';
const API='https://bitefixes-backend.onrender.com';

type Message={role:'user'|'assistant'; text:string};

export default function Home(){
 const [text,setText]=useState('');
 const [messages,setMessages]=useState<Message[]>([]);
 const [loading,setLoading]=useState(false);
 const [error,setError]=useState('');
 const send=async()=>{
   const message=text.trim();
   if(!message || loading) return;
   setText(''); setError(''); setMessages(v=>[...v,{role:'user',text:message}]); setLoading(true);
   try{
     const r=await axios.post(`${API}/chat`,{message,company_id:1,channel:'app',customer_name:'Usuario',language_preference:'auto'},{timeout:30000});
     setMessages(v=>[...v,{role:'assistant',text:r.data?.response || 'No recibí una respuesta del gateway.'}]);
   }catch(e){
     setError('No pude conectar con Bitey ahora. Revisa tu conexión e inténtalo de nuevo.');
   }finally{setLoading(false)}
 };
 return <SafeAreaView style={s.safe}><View style={s.screen}>
   <View style={s.header}><View style={s.mark}><Text style={s.markText}>B</Text></View><View><Text style={s.title}>Bitey IA</Text><Text style={s.online}>Bitey Gateway · Online</Text></View></View>
   {messages.length===0 ? <View style={s.content}><Text style={s.greeting}>Hola, soy Bitey.</Text><Text style={s.subtitle}>¿En qué estás pensando?</Text><Text style={s.note}>Asistente móvil conectado al gateway central de Bitey IA.</Text></View> : <ScrollView style={s.chat} contentContainerStyle={{padding:16,gap:10}}>{messages.map((m,i)=><View key={i} style={[s.bubble,m.role==='user'?s.userBubble:s.aiBubble]}><Text style={m.role==='user'?s.userText:s.aiText}>{m.text}</Text></View>)}{loading&&<View style={[s.bubble,s.aiBubble]}><ActivityIndicator color={blue}/></View>}</ScrollView>}
   {error ? <Text style={s.error}>{error}</Text>:null}
   <View style={s.bottom}><View style={s.composer}><Pressable style={s.plus}><Text style={s.plusText}>＋</Text></Pressable><TextInput value={text} onChangeText={setText} onSubmitEditing={send} placeholder="Escribe un mensaje..." placeholderTextColor="#8b9aa3" multiline style={s.input}/><Pressable style={s.send} onPress={send}><Text style={s.sendText}>➤</Text></Pressable></View><Text style={s.disclaimer}>Bitey IA puede cometer errores. Verifica la información importante.</Text></View>
 </View></SafeAreaView>
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:'#f7fafb'},screen:{flex:1,backgroundColor:'#fff'},header:{height:64,borderBottomWidth:1,borderBottomColor:'#e6eef1',flexDirection:'row',alignItems:'center',paddingHorizontal:18,gap:10},mark:{width:38,height:38,borderRadius:11,backgroundColor:blue,alignItems:'center',justifyContent:'center'},markText:{color:'#fff',fontSize:18,fontWeight:'800'},title:{fontSize:15,fontWeight:'800',color:'#18344d'},online:{fontSize:10,color:'#32ad76',marginTop:1},content:{flex:1,alignItems:'center',justifyContent:'center',padding:28},greeting:{fontSize:31,fontWeight:'800',color:'#17384f',textAlign:'center'},subtitle:{fontSize:18,color:'#526b78',marginTop:6,textAlign:'center'},note:{fontSize:12,color:'#8998a1',textAlign:'center',marginTop:16,maxWidth:330},chat:{flex:1},bubble:{maxWidth:'88%',padding:12,borderRadius:16},userBubble:{alignSelf:'flex-end',backgroundColor:blue,borderBottomRightRadius:5},aiBubble:{alignSelf:'flex-start',backgroundColor:'#eef7f9',borderBottomLeftRadius:5},userText:{color:'#fff',fontSize:14,lineHeight:20},aiText:{color:'#17384f',fontSize:14,lineHeight:20},error:{fontSize:10,color:'#b54b4b',textAlign:'center',paddingHorizontal:18,paddingBottom:4},bottom:{paddingHorizontal:12,paddingBottom:10},composer:{minHeight:54,borderWidth:1,borderColor:'#b9d4dc',borderRadius:18,flexDirection:'row',alignItems:'center',padding:6,elevation:2},plus:{width:40,height:40,borderRadius:12,backgroundColor:'#eef8fa',alignItems:'center',justifyContent:'center'},plusText:{fontSize:22,color:blue},input:{flex:1,minHeight:38,maxHeight:110,paddingHorizontal:8,fontSize:14,color:'#18344d'},send:{width:40,height:40,borderRadius:12,backgroundColor:blue,alignItems:'center',justifyContent:'center'},sendText:{color:'#fff',fontSize:17},disclaimer:{fontSize:9,color:'#9aa8b0',textAlign:'center',paddingTop:7}});
