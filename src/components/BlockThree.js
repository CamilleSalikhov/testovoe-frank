import { useState } from 'react';
import './BlockThree.css';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '../store/actions/addImage';



const BlockThree = () => {

    const dispatch = useDispatch();
    const imageState = useSelector(state => state.image);

    console.log(imageState);
     
    const inputRef = useRef();
    const [draggedOver, setDraggedOver] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setDraggedOver(true)


    }

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDraggedOver(false)


    };

     


    const handleOnDrop = (e) => {
        e.preventDefault();
        const currentFile = e.dataTransfer.files[0];
        console.log(currentFile);
        setDraggedOver(false);
         
        const objUrl = URL.createObjectURL(currentFile);
        
         
        dispatch(addImage(
            {
                blob:objUrl,
                type:currentFile.type,
                name:currentFile.name,
                size:currentFile.size

            }
        ))


    }

    const handleChange = (e) => {
         
    }


    const handleClick = (e) => {
        inputRef.current.click()
    }

    

     
    const formatBytes = (bytes) => {
        var marker = 1024;  
        var decimal = 3;  
        var kiloBytes = marker;  
        var megaBytes = marker * marker;  
        var gigaBytes = marker * marker * marker;  
        var teraBytes = marker * marker * marker * marker; 
    
        
        if(bytes < kiloBytes) return bytes + " Bytes";
        
        else if(bytes < megaBytes) return(bytes / kiloBytes).toFixed(decimal) + " KB";
        
        else if(bytes < gigaBytes) return(bytes / megaBytes).toFixed(decimal) + " MB";
        
        else return(bytes / gigaBytes).toFixed(decimal) + " GB";
    }


    const background = draggedOver? '#d7385e' : 'white'

    return(
        <div className='blockThree'>
            <div className='imageContainer'>
                <div className='image'>
                    {imageState.blob === undefined  ? null :<img src={imageState.blob} alt="img" />}
                </div>
                <div>{imageState.name}</div>
                <div>{imageState.type}</div>
                <div>{formatBytes(imageState.size)}</div>
            </div>
             
            <div 
            onDragOver={handleDragOver} 
            onDrop={handleOnDrop} 
            onDragLeave = {handleDragLeave}
             
            className='dropArea'
            style = {{'backgroundColor': `${background}`}}
            >
                <div className='textThree'>Перенесите файлы</div>
                <input ref={inputRef} hidden onChange={handleChange} type="file"></input>
                <button onClick={handleClick} type="button">Добавить файл</button>
            </div>
        </div>
    )


}

export default BlockThree;