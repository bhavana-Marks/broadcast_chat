import * as React from 'react';
import * as Styled from './styled';
import { RootStore } from 'store/root.store';
import { observer, inject } from 'mobx-react';
import { TextField } from '@material-ui/core';
import { Send } from '@material-ui/icons';

interface Props {
    rootStore: RootStore
}
@inject((allStores: { rootStore: RootStore }) => {
    let rootStore = allStores.rootStore;
    return {
        rootStore
    };
})

@observer
export default class Chat extends React.Component<Props> {
    setMessage = (evt: any) => {
        this.props.rootStore.chatStore.message = evt.target.value;
    }
   
    render() {
        let { user } = this.props.rootStore.homeStore;
        let { message, sendMessage, messageArray } = this.props.rootStore.chatStore;
        return (
            <Styled.Container>
                 <Styled.NameContainer>
                        {user}
                    </Styled.NameContainer>
                <Styled.ChatField>
                    <Styled.textField>
                        <TextField
                            name="message"
                            label="Type a message"
                            multiline
                            variant="outlined"
                            fullWidth
                            value={message}
                            onChange={this.setMessage}
                        />
                    </Styled.textField>
                    <Styled.Icon
                        onClick={sendMessage}
                    >
                        <Send/>
                    </Styled.Icon>
                    </Styled.ChatField>

               
                <Styled.chatContainer>
                    <Styled.MessageContainer>
                        {
                            (messageArray) ?
                            messageArray.map((msg: any) => {
                                    return (
                                        <div>
                                            <Styled.MessageContainer>
                                                <h5>{msg.user}</h5>
                                                <p>{msg.message}</p>
                                            </Styled.MessageContainer>
                                            
                                        </div>
                                    )
                                }) : <div>start Conversation</div>
                        }
                    </Styled.MessageContainer>
                    
                </Styled.chatContainer>
            </Styled.Container>
        )
    }
}

