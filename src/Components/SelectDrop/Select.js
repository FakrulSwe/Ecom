import React, { useState } from 'react'
import '../SelectDrop/Select.css'
import { IoIosArrowDown } from "react-icons/io";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';


const Select = ({data,placeholder,icon}) => {

    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(placeholder);
    const [listData, setListData] = useState(data);
    const [listData2, setListData2] = useState(data);

    const openSelect = ()=>{
        setIsOpenSelect(!isOpenSelect);
    }
    const closeSelect =(index,itemName)=>{
        setSelectedIndex(index);
        setIsOpenSelect(false);
        setSelectedItem(itemName);
    }

    const filterList =(e)=>{
        const keyword = e.target.value.toLowerCase();
        
        const list = listData2.filter((item)=>{
            return item.toLowerCase().includes(keyword);
        })

        const list2 = list.filter((item,index)=> list.indexOf(item) === index);

        setListData(list2);
    }

  return (
    <ClickAwayListener onClickAway={()=>setIsOpenSelect(false)}>
        <div className="selectDrop">
            {icon}
            <span className='openSelect'onClick={openSelect}>{selectedItem.length>16 ? selectedItem.substr(0, 12)+ '...' : selectedItem }  
            <IoIosArrowDown className='arrow'/> </span>
            {
                isOpenSelect === true && 
                <div className='selectD'>
            <div className="searchField">
                <input type="text" placeholder='Search here...' onChange={filterList}/>
            </div>
            <ul className='searchResults'>
                <li key={0} onClick={() => closeSelect(0, placeholder)} className={`${selectedIndex === 0 ? 'active' : ''}`}>{placeholder}</li>

                {
                    listData.map((item,index)=>{
                        return(
                            <li key={index+1} onClick={() => closeSelect(index+1, item)} className={`${selectedIndex === index+1 ? 'active' : ''}`}>{item}</li>
                        )
                    })
                }
                </ul>
            </div>
            }
            
        </div>
    </ClickAwayListener>
    
  )
}

export default Select