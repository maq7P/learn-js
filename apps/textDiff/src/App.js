import React from 'react';
import './App.css';

const TextDiff = ({first, second}) => {
  const common = lcs(first, second, 0, 0);

  console.log('common: ', common);
  function getDiff(s, common, type){
    const res = [];

    for(let i = 0, j = 0; i < s.length; i++){
      if(s[i] === common[j]){
        res.push(s[i]);
        j++;
      } else {
        res.push(<span className={`diff diff-${type}`}>
          {s[i]}
        </span>)
      }
    }

    return res;
  }
  return (
    <div className='cols text-diff'>
      <div className='col'>
        {getDiff(first, common, 'green')}
      </div>
      <div className='col'>
        {getDiff(second, common, 'red')}
      </div>
    </div>
  )
};

const TextArea = ({value, onChange}) => (
  <textarea value={value} onChange={(e) => onChange(e.target.value)}/>
);

function App() {
  const [first, setFirst] = React.useState("");
  const [second, setSecond] = React.useState("");

  return (
    <div className="container">
      <TextDiff
        first={first}
        second={second}
      />
      <div className="cols">
        <div className="col">
          {/*  Повесить debounce на onChange*/}
          <TextArea value={first} onChange={(text) => setFirst(text)}/>
        </div>
        <div className="col">
          <TextArea value={second} onChange={(text) => setSecond(text)}/>
        </div>
      </div>
    </div>
  );
}

function lcs(s1, s2, i, j){
  if(s1.length === i || s2.length === i){
    return '';
  }

  if(s1[i] === s2[i]){
    return s1[i] + lcs(s1, s2, i + 1, j + 1);
  }
  const first = lcs(s1, s2, i + 1, j);
  const second = lcs(s1, s2, i, j + 1);

  return first.length > second.length ? first : second;
}

export default App;
