import React from 'react' 
import '../home/style.css'
import FeaturedPost from '../../components/featured-post'
import PostList from '../../components/post-list'


export default function Home() {

    const posts = [
        {
            image: "https://images.pexels.com/photos/221106/pexels-photo-221106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Mansões britanicas",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            image: "https://images.pexels.com/photos/2530501/pexels-photo-2530501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Prais brasileiras",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet porttitor eget dolor. Duis ut diam quam nulla. Sit amet volutpat consequat mauris nunc congue nisi vitae. Nam libero justo laoreet sit amet cursus sit amet dictum. Bibendum at varius vel pharetra vel turpis nunc eget. Vehicula ipsum a arcu cursus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Amet purus gravida quis blandit turpis cursus. Tellus pellentesque eu tincidunt tortor.",
        },
        {
            image: "https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Setup",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet porttitor eget dolor. Duis ut diam quam nulla. Sit amet volutpat consequat mauris nunc congue nisi vitae. Nam libero justo laoreet sit amet cursus sit amet dictum. Bibendum at varius vel pharetra vel turpis nunc eget. Vehicula ipsum a arcu cursus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Amet purus gravida quis blandit turpis cursus. Tellus pellentesque eu tincidunt tortor.",
        },
        {
            image: "https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Setup",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet porttitor eget dolor. Duis ut diam quam nulla. Sit amet volutpat consequat mauris nunc congue nisi vitae. Nam libero justo laoreet sit amet cursus sit amet dictum. Bibendum at varius vel pharetra vel turpis nunc eget. Vehicula ipsum a arcu cursus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Amet purus gravida quis blandit turpis cursus. Tellus pellentesque eu tincidunt tortor.",
        },
        {
            image: "https://flowgames.gg/wp-content/uploads/2022/11/FhOKwHFXkAsugQD-1044x586.jpg",
            title: "Call of Duty: Warzone 2.0 tem seus requisitos de sistema revelados",
            description: "Mínimos Requer um processador e sistema operacional de 64 bits. SO: Windows® 10 64 Bit. Processador: Intel® Core™ i3-6100 / Core™ i5-2500K ou AMD Ryzen™ 3 1200. Memória: 8 GB de RAM.Placa de vídeo: NVIDIA® GeForce® GTX 960 ou AMD Radeon™ RX 470 – Sistema compatível com DirectX 12.0.DirectX: Versão 12.Rede: Conexão de internet banda larga.Armazenamento: 125 GB de espaço disponível. Recomendados: Requer um processador e sistema operacional de 64 bits.SO: Windows® 10 64 Bit ou Windows® 11 64 Bit. Processador: Intel® Core™ i5-6600K / Core™ i7-4770 ou AMD Ryzen™ 5 1400. Memória: 12 GB de RAM. Placa de vídeo: NVIDIA® GeForce® GTX 1060 ou AMD Radeon™ RX 580 – Sistema compatível com DirectX 12.0. DirectX: Versão 12. Rede: Conexão de internet banda larga. Armazenamento: 125 GB de espaço disponível.",
        },
    ];

    return(
        <div>
            {posts && posts.length > 0 && <FeaturedPost post={posts[0]} />}
            <PostList posts={posts}/>
        </div>
    )
}