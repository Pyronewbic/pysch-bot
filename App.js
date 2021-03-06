import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { DfConfig } from './env'

const PSYCH_BOT = {
  _id: 2,
  name: 'pysch',
  avatar: 'https://i.imgur.com/7k12EPD.png'
}

class App extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: `Hey there - I'm your personal psychotherapist (Alpha Build).\n\nWhat's Up?`,
        createdAt: new Date(),
        user: PSYCH_BOT
      }
    ]
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      DfConfig.client_email,
      DfConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      DfConfig.project_id
    );
  }

  handleGoogleResponse(result) {
    console.log(result)
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: PSYCH_BOT
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}

export default App;