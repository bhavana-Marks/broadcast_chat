import Styled from 'styled-components';

export const Container = Styled.div`
    clear: both;
`
export const chatContainer = Styled.div`
    height: 95vh;
    box-sizing: border-box; 
    box-shadow: 1px 1px 5px 1px rgba(51,44,51,1);

`
export const NameContainer = Styled.div`
    height: 40px;
    color: blanchedalmond;
    background-color: rgb(171, 202, 180);
    box-shadow: 0px 0px 5px 0px rgba(209,205,209,1);
    font-size: 20px;
    font-weight: 300;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align:center;
    padding-bottom:10px;
`
export const ChatField = Styled.div`
    display:grid;
    justify-content: space-evenly;
    grid-column-gap: 10px;
    grid-template-columns: 0.7fr 0.3fr;
`
export const textField = Styled.div`
`
export const Icon = Styled.div`
    box-sizing: border-box;
    :hover {
		color: green;
		cursor: pointer;
	}

`
export const MessageContainer = Styled.div`
    width: 100%;
    height: 78%;
    text-align: center;
    overflow-y:auto;
`