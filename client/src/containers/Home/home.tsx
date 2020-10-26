import * as React from 'react';
import * as Styled from './styled';
import { RootStore } from 'store/root.store';
import { observer, inject } from 'mobx-react';
import { TextField, Button } from '@material-ui/core';

interface Props {
    rootStore: RootStore
}
interface State {
    userName: string;
}
@inject((allStores: { rootStore: RootStore }) => {
    let rootStore = allStores.rootStore;
    return {
        rootStore
    };
})

@observer
export default class Home extends React.Component<Props, State> {
    state = {
        userName: ''
    }
    setUser = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            userName: evt.target.value
        });
    }
    doLogin = async () => {
        this.props.rootStore.homeStore.doLogin(this.state.userName);
    }
    render() {
        return (
            <Styled.home>
                <Styled.header>
                    <Styled.heading>
                        Connect with Friends
                    </Styled.heading>
                </Styled.header>
                <Styled.loginContainer>
                        <TextField
                            name="username"
                            label="Username"
                            variant="outlined"
                            onChange={this.setUser}
                            value={this.state.userName}
                            size="medium"
                        />
                        <Button
                            color="primary"
                            // variant="contained"
                            onClick={this.doLogin}
                        > Go </Button>

                    </Styled.loginContainer>
            </Styled.home>
        )
    }
}