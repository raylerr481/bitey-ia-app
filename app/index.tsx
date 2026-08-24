import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';

const blue='#0b6f8a';

export default function Home(){
 const [text,setText]=useState('');
 return <SafeAreaView style={s.safe}><View style={s.screen}>
   <View style={s.header}><View style={s.mark}><Text style={s.markText}>B</Text></View><View><Text style={s.title}>Bitey IA</Text><Text style={s.online}>Online</Text></View></View>
   <View style={s.content}><Text style={s.greeting}>Hola, soy Bitey.</Text><Text style={s.subtitle}>¿En qué estás pensando?</Text><Text style={s.note}>Tu asistente móvil conectado al Supercerebro de Bitey IA.</Text></View>
   <View style={s.bottom}><View style={s.composer}><Pressable style={s.plus}><Text style={s.plusText}>＋</Text></Pressable><TextInput value={text} onChangeText={setText} placeholder="Escribe un mensaje..." placeholderTextColor="#8b9aa3" multiline style={s.input}/><Pressable style={s.mic}><Text>🎙️</Text></Pressable><Pressable style={s.send}><Text style={s.sendText}>➤</Text></Pressable></View><Text style={s.disclaimer}>Bitey IA puede cometer errores. Verifica la información importante.</Text></View>
 </View></SafeAreaView>
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:'#f7fafb'},screen:{flex:1,backgroundColor:'#fff'},header:{height:64,borderBottomWidth:1,borderBottomColor:'#e6eef1',flexDirection:'row',alignItems:'center',paddingHorizontal:18,gap:10},mark:{width:38,height:38,borderRadius:11,backgroundColor:blue,alignItems:'center',justifyContent:'center'},markText:{color:'#fff',fontSize:18,fontWeight:'800'},title:{fontSize:15,fontWeight:'800',color:'#18344d'},online:{fontSize:10,color:'#32ad76',marginTop:1},content:{flex:1,alignItems:'center',justifyContent:'center',padding:28},greeting:{fontSize:31,fontWeight:'800',color:'#17384f',textAlign:'center'},subtitle:{fontSize:18,color:'#526b78',marginTop:6,textAlign:'center'},note:{fontSize:12,color:'#8998a1',textAlign:'center',marginTop:16,maxWidth:330},bottom:{paddingHorizontal:12,paddingBottom:10},composer:{minHeight:54,borderWidth:1,borderColor:'#b9d4dc',borderRadius:18,flexDirection:'row',alignItems:'center',padding:6,shadowColor:blue,shadowOpacity:.08,shadowRadius:12,elevation:2},plus:{width:40,height:40,borderRadius:12,backgroundColor:'#eef8fa',alignItems:'center',justifyContent:'center'},plusText:{fontSize:22,color:blue},input:{flex:1,minHeight:38,maxHeight:110,paddingHorizontal:8,fontSize:14,color:'#18344d'},mic:{width:38,height:38,alignItems:'center',justifyContent:'center'},send:{width:40,height:40,borderRadius:12,backgroundColor:blue,alignItems:'center',justifyContent:'center'},sendText:{color:'#fff',fontSize:17},disclaimer:{fontSize:9,color:'#9aa8b0',textAlign:'center',paddingTop:7}}
);