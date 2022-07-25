import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  // const spanRef = React.createRef(); // Function Component가 실행될때마다 creatRef() 또한 계속해서 호출함.
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & update!: ${count}`);
  }, []); 
  // 컴포넌트가 마운드 됐을 때(처음 나타났을때), 언마운트 됐을때(사라질때), 그리고 업데이트 될 때(특정 props가 바뀔 떄) 특정 작업을 처리하는 방법
  // deps 배열을 비우게 되다면, 컴포넌트가 처음 나타날때만 useEffect에 등록된 함수가 호출됨
  // deps 배열에 특정 값을 넣는다면, 컴포넌트가 처음 마운트 될 때와 해당 값이 업데이트 될 때마다 호출됨.

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

/*class SimpleHabit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </li>
    );
  }
}

export default SimpleHabit;*/
