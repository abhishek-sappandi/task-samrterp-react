import * as React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import {useDispatch , connect} from 'react-redux'
import { toast } from 'react-toastify';
import {addPost} from '../actions/postAction'

import 'react-toastify/dist/ReactToastify.css';
import "react-mde/lib/styles/css/react-mde-all.css";
import "./styles.css";
toast.configure()

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

function CreatePost(props) {
  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState("write");
  const [title, setTitle] = React.useState("hi");
  const [isSubmit, setisSubmit] = React.useState(false);
  const dispatch = useDispatch()

  const save = async function* (data) {
    // Promise that waits for "time" milliseconds
    const wait = function (time) {
      return new Promise((a, r) => {
        setTimeout(() => a(), time);
      });
    };

    await wait(2000);
    // yields the URL that should be inserted in the markdown
    yield "https://picsum.photos/300";
    await wait(2000);

    // returns true meaning that the save was successful
    return true;
  };

  const handleSubmit = (e) => {
      e.preventDefault()
      const obj = {
          title : title,
          text : value
      }
      //setisSubmit(true)
      if(value.length > 0 && title.length > 0){
        dispatch(addPost(obj))
        setisSubmit(false)
        setTitle('')
        setValue('')

        toast.error('Added sucessfully', {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
       }
       else {
        setisSubmit(true)
       }
      //  else if(value.length === 0){
      //    window.alert("please enter Post Details")
      //  }

      //console.log("submit");
  }
  
  return (
    <div className="container">
        <br/><br/>
        <h2 align ='center'> No of posts - {props.post.length}</h2>
        <form onSubmit={handleSubmit}>
            <input
                className={( isSubmit && title.length === 0 ) ? 'alert' : ''}
                type='text'
                name='title'
                placeholder={( isSubmit && title.length === 0 ) ? "alert" : 'Please enter title'}
                value={title}
                onChange={event => setTitle(event.target.value)}
            /><br/><br/>
            <p style={{color : 'red'}}> {( isSubmit && title.length === 0 ) ? 'alert : Please enter title' : ''} </p>

            <ReactMde
                value={value}
                onChange={setValue}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                Promise.resolve(converter.makeHtml(markdown))
                }
                
                childProps={{
                writeButton: {
                    tabIndex: -1
                }
                }}
                paste={{
                saveImage: save
                }}
            />
            <p style={{color : 'red'}}> {( isSubmit && value.length === 0 ) ? 'alert : MarkDown Cannot be Empty' : ''} </p>

            <input 
            type='submit'
            value='PUBLISH'
            />
            
        </form>
        <br/><br/><br/>
        <p><small style={{color : 'green'}}>*Due to absence of Backend , the data won't persists (PAGE RELOAD)</small></p>
    </div>
  );
}
const mapStateToPrps = (state) =>{
  return {
      post : state.post
  }
}
export default connect(mapStateToPrps)(CreatePost)


// function loadSuggestions(text) {
//   return new Promise((accept, reject) => {
//     setTimeout(() => {
//       const suggestions = [
//         {
//           preview: "Andre",
//           value: "@andre"
//         },
//         {
//           preview: "Angela",
//           value: "@angela"
//         },
//         {
//           preview: "David",
//           value: "@david"
//         },
//         {
//           preview: "Louise",
//           value: "@louise"
//         }
//       ].filter((i) => i.preview.toLowerCase().includes(text.toLowerCase()));
//       accept(suggestions);
//     }, 250);
//   });
// }