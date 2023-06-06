import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

export default function ReactPage() {
  const [number, setNumber] = useState(0);
  async function fetcher(url) {
    const result = await axios.get(url);
    // const result = await res.json();
    return result.data;
  }
  const { data: docs, error } = useSWR("posts", () =>
    fetcher("https://jsonplaceholder.typicode.com/posts")
  );
  //   const docs = [
  //     {
  //       id: 1,
  //       title: "React 공부를 시작!!!!하겠습니다.",
  //       date: "2023/05/30",
  //     },
  //     {
  //       id: 2,
  //       title: "CRA없이 React 공부를 시작!!!!하겠습니다.",
  //       date: "2023/05/31",
  //     },
  //     {
  //       id: 3,
  //       title: "이제는 사용배호자 useMemo, useCallback",
  //       date: "2023/06/01",
  //     },
  //     {
  //       id: 4,
  //       title: "React프로젝트에 prettier 적용하기",
  //       date: "2023/06/01",
  //     },
  //     {
  //       id: 5,
  //       title: "React의 setState() 제대로 사용하기",
  //       date: "2023/06/02",
  //     },
  //   ];
  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     // const result = await res.json();
  //     return result.data;
  //   }
  //   fetchData().then((res) => {
  //     setDocs(res);
  //   });
  // }, []);
  if (error) return <div>failed to load</div>;
  if (!docs) return <div>loading...</div>;
  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      {docs.map((doc) => (
        <Link
          to={`${doc.id}`}
          key={doc.id}
          style={{ display: "block", margin: "1rem 0" }}
        >
          {doc.title}
        </Link>
      ))}
    </div>
  );
}
