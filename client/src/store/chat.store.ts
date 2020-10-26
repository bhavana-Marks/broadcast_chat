import baseStore from './base.store';
import { observable } from 'mobx';
import axios from 'axios';

export default class chatStore extends baseStore {
    @observable message: String = '';
    @observable messageArray:any = [];
   
    sendMessage = async () => {
          let result = await axios.post("http://localhost:4000/conversation/send", this.message);
          this.rootStore.socket.on('messageStored',(item: any) => {    
           
            console.log('=========================================')  
            this.messageArray.push({'message': this.message, user: this.rootStore.homeStore.user}) 
          })

        this.message= '';            
    }
}