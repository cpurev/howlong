<template>
    <Transition name="fade-up" appear>
          <div class="experience" >
              <ol>
                <li class="tile">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.fnsb.gov">
                    <header>2023 - PRESENT</header>
                    <div>
                      <h3>
                        <div class="title">
                          Software Developer
                          <span><font-awesome-icon icon="fa-solid fa-link" size="sm" /></span>
                        </div>
                        <div class="company">Fairbanks North Star Borough</div>
                      </h3>
                      <p>Deliver high-quality reliable software solutions to the borough goverment with diverse array of projects such as python script automation, full stack web development and API integration to existing systems. 
                        Provide leadership and self starter within Information Integration department through collabration, code base ownership/maintainer and knowledge shares.
                      </p>
                      <ul class="pill-list">
                        <li><div class="pill">Azure</div></li>
                        <li><div class="pill">Vue</div></li>
                        <li><div class="pill">JavaScript</div></li>
                        <li><div class="pill">TypeScript</div></li>
                        <li><div class="pill">Python</div></li>
                        <li><div class="pill">C#</div></li>
                        <li><div class="pill">GO</div></li>
                        <li><div class="pill">HTML/CSS</div></li>
                      </ul>
                      </div>
                    </a>
                </li>
                <li class="tile">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.alaska.edu">
                    <header>2021 - 2023</header>
                    <div>
                      <h3>
                        <div class="title">Student Systems Engineer
                          <span><font-awesome-icon icon="fa-solid fa-link" size="sm" /></span>
                        </div>
                        <div class="company">University of Alaska</div>
                      </h3>
                      <p>Collabrated with student employees, other department staff and full time systems engineer/web developers to create full-stack web service applications.
                        Worked on resolving tickets, mentoring users on CMS, making school webpages more accessible, and create CI/CD pipeline on various projects.
                      </p>
                      <ul class="pill-list">
                        <li><div class="pill">React</div></li>
                        <li><div class="pill">Vue</div></li>
                        <li><div class="pill">JavaScript</div></li>
                        <li><div class="pill">TypeScript</div></li>
                        <li><div class="pill">Python</div></li>
                        <li><div class="pill">Ruby</div></li>
                        <li><div class="pill">HTML/CSS</div></li>
                        <li><div class="pill">PHP</div></li>
                      </ul>
                    </div>
                  </a>
                </li>
              </ol>
          </div>
        </Transition>
</template>

<style scoped>

.tile{
  padding: 17px;
  cursor: pointer;
}
.tile a{
  text-decoration: none;
  color: white;
}
.company{
  font-size: var(--f-medium);
}
.experience ol{
  list-style: none;
  padding: 0;
}
.experience li:hover{
  background: rgba(145,145,145, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.8px);
  -webkit-backdrop-filter: blur(7.8px);
}

.experience li:hover .title{
  color: var(--blue);
}
.experience li span{
  display: inline-block;
  transition: all 0.35s cubic-bezier(0.645,0.045,0.355,1);
}
.experience li:hover span{
  translate: 3px 0;
}
.experience p{
  margin: 29px 0;
}
.experience h3 .title{
  font-weight: 600;
}
.pill-list{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}
.pill-list li{
  margin: 7px 17px 0 0;
}
.pill{
  background-color: var(--blue-dim);
  border-radius: 7px;
  padding: 5px;
  color: var(--blue-bright);
  font-size: var(--f-small);
}
</style>