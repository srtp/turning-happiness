import React from "react";
import { store } from "../../../../components/store/store";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import Istj from "../../../../components/card/Istj";
import Infj from "../../../../components/card/Infj";

const End = observer(() => {
  let answers = store.character.toString();
  let results = answers.split(",");
  let result =  results.join("")
  
  return (
    <div>
      {results.join("")}
      {result == "INFJ" ? (<Infj />) : null}
    </div>
  );
});

export default End;
