import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import {Audio} from 'expo-av'
export default class PhonicSoundButton extends React.Component{
    constructor(props){
        super(props)
    }
    
    playSound=async(soundChunk)=>{
        console.log(soundChunk )
        var soundLink='https://s3-whitehatjrcontent.whjr.online/phones/'+soundChunk+'.mp3';
        await Audio.Sound.createAsync(
            {uri:soundLink},
            {shouldPlay:true}
        )
    }

    render(){
        return(
            <TouchableOpacity
            style={
                this.props.buttonIndex===this.state.pressButtonIndex
                ?[styles.chunkButton,{backgroundColor:'white'}]
                : [styles.chunkButton,{backgroundColor:'red'}]

            }
            onPress={()=>{
                this.setState({pressButtonIndex:this.props.buttonIndex})
                this.playSound(this.props.soundChunk)
                
            }
            }>
                <Text style={
                    this.props.buttonIndex===this.state.pressButtonIndex
                    ?[styles.displayText,{backgroundColor:'red'}]
                    :[styles.displayText,{backgroundColor:'white'}]
                }>
                    {this.props.wordChunk}
                </Text>
            </TouchableOpacity>
        )
    }
}


const styles=StyleSheet.create({
    displayText: {
        textAlign: 'center',
        fontSize: 30
    },
    chunkButton: {
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'red'},

})

