import { Button, IconButton } from "@mui/material";
import React from "react";
import './css/Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from "./SidebarOption";
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from "react-redux";
import { openSendMessage } from '../features/mailSlice'

function Sidebar() {
    const dispatch = useDispatch()

    return (
        <div className="sidebar">
            <Button 
                startIcon={<AddIcon/>} 
                className="sidebar__compose"
                onClick ={() => dispatch(openSendMessage())}    
            >Compose</Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={54} selected={false}/>
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} selected={false}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} selected={false}/>
            <SidebarOption Icon={SendIcon} title="Sent" number={54} selected={false}/>
            <SidebarOption Icon={DraftsIcon} title="Drafts" number={54} selected={false}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} selected={false}/>

            <div className="sidebar__footer">
                <div className="siderbar__footer--icons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar