
    const LinksSocialMedia = {
      github: 'grazuzu',
      youtube:'maykbrito',
      facebook: 'maykbrito',
      instagram: 'grazi_sena_26',
      twitter: 'maykbrito'
    }

    function changeSocialMediaLinks(){
      
      for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}` //template string
        
      }
    }

    changeSocialMediaLinks()

    function getGithubProfileInfos(){
      const url =`https://api.github.com/users/${LinksSocialMedia.github}`

      fetch(url)
        .then(response => response.json()) 
        .then(data => {
          userName.textContent = data.name
          userBio.textContent = data.userBio
          userLink.href = data.html_url
          userImage.src = data.avatar_url
          userLogin.textContent = data.login
        })


    }
    getGithubProfileInfos()
    //promise(.then()); arrow function (=>)