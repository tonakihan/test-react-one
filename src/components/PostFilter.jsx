import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export default function PostFilter({filter, setFilter, ...props}) {
  return (
    <div>
      <MySelect 
        defaultName="Сортировка" 
        options={[
          {name: "По наименованию", value: "title"},
          {name: "По содержанию", value: "body"} 
        ]}
        onChange={value => setFilter({
          ...filter,
          typeSort: value
        })}
        value={filter.typeSort}
      />
      <MyInput 
        placeholder={"Search..."} 
        value={filter.searchQuery}
        onChange={event => setFilter({
          ...filter,
          searchQuery: event.target.value
        })}
      />
    </div>
  )
}
