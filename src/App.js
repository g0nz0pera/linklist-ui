import logo from './logo.svg';
import './App.css';
import profilePic from "./rustIcon.png";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Icon from './Icon';

function App() {
  const supabase = createClient(
      process.env.REACT_APP_SUPABASE_PROJ_URL,
      process.env.REACT_APP_SUPABASE_PROJ_KEY
      );

  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLinks();
  }, []);

  async function getLinks() {
    setLoading(true);
    try {
      const { data } = await supabase.from("links").select();
      setLinks(data);
    }catch(e){
      console.error(e);
    }finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <div className="App-header container mx-auto">
        <img src={profilePic} className="profile-pic w-20 h-20 mb-4 rounded-full" alt="logo" />
        {
          loading ? <p>Please wait while I get my Links ready...</p> :
              <ul className='flex flex-col w-full'>
                {
                    links && links.map((link, index) => (
                        <li key={index}
                            className='cursor-pointer m-2 py-2 px-10 border-black border-2 text-sm md:text-md text-slate-900 '>
                          <a href={link.url} className='flex item-center' title={link.title} target='_blank'
                             rel='no-referrer'>
                            <Icon iconName={link.icon}/> <p className='ml-3'>{link.title}</p>
                          </a>
                        </li>
                    ))
                }
              </ul>
        }
      </div>
    </div>
  );
}

export default App;
