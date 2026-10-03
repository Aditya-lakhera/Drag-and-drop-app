import React from 'react'

const DragAndDrop = ({ data : initialData}) => {
    const [data, setData] = React.useState(initialData);

    const mainHeadings= Object.keys(data);

  return (
    <div style={style.root} >
      {
        mainHeadings.map((heading) =>  (
            <div style={style?.container}  key={heading}>
              <p style={style?.heading}>{heading.replace('_', ' ')}</p>
              <div style={style?.taskContainer}>
                {data[heading].map((task) => (
                    <div draggable style={style?.task} key={task.id}>
                  <p style={style?.taskTitle}>{task.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default DragAndDrop;

const style={
    root: {
        width: "100%",
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    container: {
        width: "33%",
    },
    heading: {
        textAlign: "center",
        fontSize: "1.2rem",
        fontWeight: 700,
    },
    taskContainer: {
        padding:"10px",
        border: "1px solid black",
        width:"80%",
        backgroundColor: "#90ab8b",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        
    },
    task: {
        height:"10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding:"10px",
        border: "1px solid black",
        width:"80%",
        backgroundColor: "#ebf4dd",
        borderRadius: "12px",
        marginTop: 10,
    },
    taskTitle: {}
}
