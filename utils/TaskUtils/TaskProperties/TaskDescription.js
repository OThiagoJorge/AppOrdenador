import { Pressable, TextInput, Text, View, FlatList } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'

export const TaskDescription = () => {
    return (
        <View>
            <Pressable 
                style={{                    
                    marginLeft: '10%',
                    width: '80%',
                    height: '60%',
                    backgroundColor: 'white',
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 10
                }}
            >
                <View style={{height: '100%', padding: 10}}>
                    <FlatList
                        data={[
                            {key: 'Tarefa 1'},
                            {key: 'Tarefa 2'},
                            {key: 'Tarefa 3'},
                            {key: 'Tarefa 4'},
                            {key: 'Tarefa 5'},
                            {key: 'Tarefa 6'},
                            {key: 'Tarefa 7'},
                            {key: 'Tarefa 8'},
                            {key: 'Tarefa 9'},
                            {key: 'Tarefa 10'}
                        ]}
                        renderItem={({item}) => 
                            <View style={{width: '100%', padding: 10, backgroundColor: '#f3f4f6', marginBottom: 5, borderRadius: 5}}>
                                <Text>{item.key}</Text>
                                <Pressable style={{position: 'absolute', right: 10, top: 10}}>
                                    <Text style={{color: 'black'}}>...</Text>
                                </Pressable>
                            </View>
                        }
                    />
                </View>
                    <View style={{width: '100%', padding: 10, backgroundColor: 'white', borderWidth: 1, borderColor: 'black', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TextInput
                        placeholder="Adicionar item"
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: 'white',
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 5,
                            paddingHorizontal: 10
                        }}
                    />                   
                    <Pressable>
                        <AntDesign name="send" size={24} color="black" />
                    </Pressable>        
                </View>                       
            </Pressable>            
        </View>
    )
}