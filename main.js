users=[
    {
      "id": 1,
      "name": "Robert Lewandowski",
      "username": "FC Bayern",
      "stats": "55 goals in 47 games acroos all competition. He won treble with Bayern.",
      
      "image":"https://images.daznservices.com/di/library/GOAL/35/11/robert-lewandowski-bayern-munich-2019-20_kocjpygntq5o15shxercno8tq.jpg?t=-742171837&quality=100",
      "button": 1,
    },
    {
      "id": 2,
      "name": "Kevin De Bruyne",
      "username": "Manchester City",
      "stats": "13 goals and record 20 assists in Premier League.",
            "image":"https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1246x423:1248x421)/origin-imgresizer.eurosport.com/2020/07/26/2856083-58867668-2560-1440.jpg",
            "button": 2,
      },
      
    {
      "id": 3,
      "name": "Lionel Messi",
      "username": "FC Barcelona",
      "stats": "31 goals and 25 assists in all competition.",
            "image":"https://ca-times.brightspotcdn.com/dims4/default/87bb896/2147483647/strip/true/crop/3663x2442+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F87%2Fdf%2Ff1b51734478e98b023b4871deefd%2Fvirus-outbreak-spain-soccer-restart-01706.jpg",
            "button": 3,
          },
    {
      "id": 4,
      "name": "Neymar jr",
            "image":"https://images.ctfassets.net/3mv54pzvptwz/3QEOoE6Mrx0mCkTqZxL1AG/f27b71a6c4222e033455616d2e0aee81/12neymar_jr_atalanta_x_psg_champions_120820.jpg",
      "username": "Paris Saint Germain",
      "stats": "13 goals in 15 appearences and led PSG to thier firstever UCL final.",
      "button": 4,
    },
    {
      "id": 5,
      "name": "Cristiano Ronaldo",
      "username": "Juventus",
      "stats": "37 goals in all competition. he scored in a record 11 games straight in Serie A.",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtiWmWSDgTWMN2yL1SkSsD_eR7CI1JI4ojw&usqp=CAU",
            "button": 5,
    },
    {
      "id": 6,
      "name": "Kylian Mbappe",
      "username": "Paris Saint Germain",
      "stats": "He score 25 goals in 27 matches acroos all competition and won four titles with PSG.",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-7wf1JnAHrJPalFGO-2XTNochWhYi6tCLA&usqp=CAU",
            "button": 6,
    },
    {
      "id": 7,
      "name": "Virgil van Dijk",
      "username": "Liverpool",
      "stats": "He played every single minute of 19/20 title winning campaign of Premier League thier first in 30 years and the reds were unbeaten in 37/38 matches.",
            "image":"https://i2-prod.mirror.co.uk/incoming/article22416858.ece/ALTERNATES/s1200c/0_Virgil-van-Dijk.jpg",
            "button": 7,
    },
    {
      "id": 8,
      "name": "Karim Benzema",
      "username": "Real Madrid",
      "stats": "He sored 21 goals which proved to be vital for Madrid's title winning campaign of post Ronaldo era.",
            "image":"https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/yjam9cmx1zjr8wzb_1594983308.jpeg?tr=w-1242,h-710,f-jpeg",
            "button": 8,
    },
    {
      "id": 9,
      "name": "Thomas Muller",
      "username": "FC Bayern Munchen",
      "stats": "12 goals and 25 assists and a treble winner. He is the most decorated German footballer with 27 trophies under his belt.",
            "image":"https://cdn.vox-cdn.com/thumbor/Ewv3L8S6VmgWz0nG3uWcSSUW8jQ=/0x0:3000x2000/1200x0/filters:focal(0x0:3000x2000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21934143/1150207454.jpg.jpg",
            "button": 9,
    },
    {
      "id": 10,
      "name": "Sadio Mane",
      "username": "Liverpool",
      "stats": "His 22 goals and 12 assists played very crucial role in Livepool's ttle winning campaign.",
            "image":"https://cdn-wp.thesportsrush.com/2020/10/460732a7-untitled-design-24.jpg",
            "button": 10,
          }
  ]
  
for(let i=0;i<users.length;i++){
    document.write('<div class="card"><img src='+users[i]["image"]+' alt="John" style="width:100%"><h1>'+users[i]["name"]+'</h1><p class="title">'+users[i]["username"]+'</p><p>'+users[i]["stats"]+'</p><div style="margin: 24px 0;">   <a href="#"><i class="fa fa-instagram"></i></a>    <a href="#"><i class="fa fa-twitter"></i></a>    <a href="#"><i class="fa fa-facebook"></i></a> </div><p><button>Number  '+(i+1)+'</button></p></div>')

  }