import React, {Component} from 'react';
import styled from 'styled-components';
import NodeList from './note-list/note-list.js'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppDiv = styled.div`

  width: 50vw;
  height: 50vh;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0 10px 6px -6px #777;
  background-color: #28bbf7;

`;

class App extends Component{
  state = {
    search: '',
    notes: [
      {date: new Date(), text: '첫 번째 메모 텍스트', title: '첫 번째 메모입니다.'},
      {date: new Date(), text: '두번째 메모', title: 'SECOND', edited:false}
    ]
  };

  render(){
    return (
      <Container>
        <AppDiv id="app">
          <div id="search-bar">Search-Bar</div>
          <NodeList notes={this.state.notes}/>
        </AppDiv>
      </Container>
    );
  }
}

export default App;
