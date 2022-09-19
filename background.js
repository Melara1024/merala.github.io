function changeBackground( name ) {
    switch(name)
    {
        case "bricks":
            document.getElementsByTagName('body')[0].style.backgroundImage = "url(https://melara1024.github.io/site/resources/background/sand.png)";
        break;
        case "sand":
            document.getElementsByTagName('body')[0].style.backgroundImage = "url(https://melara1024.github.io/site/resources/background/sand.png)";
        break;
        case "iron":
            document.getElementsByTagName('body')[0].style.backgroundImage = "url(https://melara1024.github.io/site/resources/background/iron_block.png)";
        break;
        case "deep":
            document.getElementsByTagName('body')[0].style.backgroundImage = "url(https://melara1024.github.io/site/resources/background/deepslate_top.png)";
        break;
        case "barrel":
            document.getElementsByTagName('body')[0].style.backgroundImage = "url(https://melara1024.github.io/site/resources/background/barrel_bottom.png)";
        break;
    }
}