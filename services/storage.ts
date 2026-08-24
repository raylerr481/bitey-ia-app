import AsyncStorage from '@react-native-async-storage/async-storage';
export type LocalMessage={id:string;role:'user'|'assistant';content:string;createdAt:number};
const KEY='bitey.local.conversations.v1';
export async function loadConversations():Promise<Record<string,LocalMessage[]>>{try{return JSON.parse((await AsyncStorage.getItem(KEY))||'{}')}catch{return {}}}
export async function saveConversation(id:string,messages:LocalMessage[]){const all=await loadConversations();all[id]=messages;await AsyncStorage.setItem(KEY,JSON.stringify(all));}
export async function clearConversations(){await AsyncStorage.removeItem(KEY);}