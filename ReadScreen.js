import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class ReadScreen extends React.Component {
    constructor(){
        super();        
    }

    render(){
        return(
            <ScrollView>
                <View backgroundColor = 'black'>
                    <View>
                        <Text style = {styles.title}>Read the best stories</Text>
                    </View>

                    <View >
                        <Text style = {styles.storytitle}>1.  The Lion and the Mouse</Text>
                        <Image source = {require("../assets/lionlogo.jpg")}
                        style= {{width:200, height:200, alignSelf:'center'}}/>

                        <Text style = {styles.story}>
                            A lion was once sleeping in the jungle when a mouse started running up and down his body just for fun.
                            This disturbed the lion’s sleep, and he woke up quite angry.
                            He was about to eat the mouse when the mouse desperately requested the lion to set him free.
                            “I promise you, I will be of great help to you someday if you save me.”
                                The lion laughed at the mouse’s confidence and let him go.
                        </Text>

                        <Text style = {styles.SUBstory}>
                            One day, a few hunters came into the forest and took the lion with them.
                            They tied him up against a tree. The lion was struggling to get out and started to whimper.
                            Soon, the mouse walked past and noticed the lion in trouble.
                            Quickly, he ran and gnawed on the ropes to set the lion free. Both of them sped off into the jungle.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }    
}

const styles = StyleSheet.create({
    title : {
        margin:20,
        color:'white',
        fontSize:30,
        marginTop:50
    },
    storytitle : {
        margin:20,
        fontSize:20,
        color:'white',
    },
    story:{
        marginLeft:30,
        marginRight:10,
        fontSize:14,
        color:'white',
        marginTop:10,       
    },
    SUBstory:{
        marginLeft:30,
        marginRight:10,
        fontSize:14,
        color:'white',
        marginTop:10,   
        marginBottom:70    
    }
})