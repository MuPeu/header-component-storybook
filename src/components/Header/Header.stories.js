import { fn } from "storybook/test";

import Header from "./index";

export default {
    title: "Components/Header",
    component: Header,
};

export const Default = {
    args: {
        logo: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/960px-LEGO_logo.svg.png",
            alt: "Logo Lego"
        },
        links: [
            { label: "Home", href: "#" },
            { label: "Sobre", href: "#" }
        ],
        buttons: [
            { label: "Login", onClick: () => alert("Login") }
        ],
        backgroundColor: "#f5f5f5",
        textColor: "#222",
        buttonBg: "#da291c",
        buttonText: "#f5f5f5",
    }
};

export const Dark = {
    args: {
        logo: {
            src: "https://freepngimg.com/save/105193-stormtrooper-mask-png-image-high-quality/800x600",
            alt: "Logo Stormtrooper"
        },
        links: [
            { label: "Home", href: "#" },
            { label: "Sobre", href: "#" }
        ],
        buttons: [
            { label: "Se Alistar", onClick: () => alert("Bem Vindo ao Império") }
        ],
        backgroundColor: "#222",
        textColor: "#fff",
        buttonBg: "#fff",
        buttonText: "#000",
    }
};