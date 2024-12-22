import Tabs from "./tabs";

const content = [
    {
        title: "Tab 1 ",
        label: "1",
        content: "Content 1",
    },
    {
        title: "Tab 2 ",
        label: "2",
        content: "Content 2",
    },
    {
        title: "Tab 3 ",
        label: "3",
        content: "Content 3",
    },
];

function onChange(index) {
    console.log("Tab changed to index: ", index);
}

export default function TabsTest() {

    return <Tabs content={content} onChange={onChange} />;
}