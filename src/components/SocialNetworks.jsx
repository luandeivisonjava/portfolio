import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import '../style/components/socialnetworks.sass';

const socialNetworks = [
    { nome: 'linkedin', icon:<FaLinkedinIn />, a: 'https://www.linkedin.com/in/luan-deivison-112aa11a5/' },
    { nome: 'github', icon:<FaGithub />, a: 'https://github.com/luandeivisonjava' },
    { nome: 'instagram', icon:<FaInstagram />, a: 'https://www.instagram.com/luandeivisonguitarr/' }

]
const SocialNetworks = ()=> {
    return <section id='social-networks'>
        {socialNetworks.map((network)=>(
            <a href={network.a} target='_blanck' className='social-btn' id={network.nome} key={network.nome}>
                {network.icon}
            </a>
        ))}
    </section>
}

export default SocialNetworks;