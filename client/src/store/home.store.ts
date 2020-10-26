import baseStore from './base.store';
import { observable } from 'mobx';

export default class HomeStore extends baseStore {
    @observable user:string = '';

    doLogin = (user:any) => {
        this.user = user;
        this.navigateToChat();
    }
    navigateToChat = () => {
       this.rootStore.navigationStore.push('/chat');
    }
}