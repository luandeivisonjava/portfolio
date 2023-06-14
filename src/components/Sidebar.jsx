import Avatar from '../img/Luan.jpg';
import '../style/components/sidebar.sass';
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';
const Sidebar = ()=> {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt='Luan Deivson'/>
            <p className='title'>Desenvolvedor Web</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="https://drive.google.com/u/0/uc?id=1bb7_v3LolxjVK2Xq0SrvYXXxeFqm6dPi&export=download" className='btn'>Download Currículo</a>
        </aside>
    )
}

export default Sidebar