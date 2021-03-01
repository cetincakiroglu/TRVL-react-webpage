import React from 'react'
import AOS from 'aos';


const mainContent=[
    {
        heading:'Perspiciatis',
        text:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint'
    },
    {
        heading:'Veritatis',
        text: 'Occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.'
    },
    {
        heading:'Corporis',
        text:' Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio'
    },
    {
        heading:'Voluptate',
        text: 'Quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        text2: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
    },
    {
        // 4
        heading: 'Dignissimos Ducimus',
        text: 'Id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio,ed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
      
    },
    {
        // 5
        heading:'Omnis Voluptas',
        text: 'ed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem',
        
    },
    {
        // 6
        heading:'Maiores Alias',
        text: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
       
    }
]
function Main() {
    AOS.init();
    return (
        <>
        <div className="container">
            <div className="row mt-5 pt-md-5 pt-sm-5"  data-aos="fade-left" data-aos-duration="3000">
                <div className="col-md-12">
                    <h2>Our Services</h2>
                </div>
                <div className="row py-md-5 py-sm-0">
                    <div className="col-md-3 mt-sm-5 mt-md-0">
                        <div className="col-md-6 mb-md-5">
                            <h3>{mainContent[0].heading}</h3>
                        </div>
                            <p>{mainContent[0].text}</p>
                    </div>
                    <div className="col-md-3">
                        <div className="col-md-10 mb-md-5 mt-sm-5 mt-md-0">
                            <h3>{mainContent[1].heading}</h3>
                        </div>
                        <p>{mainContent[1].text}</p>
                    </div>
                    <div className="col-md-3">
                        <div class="col-md-10 mb-md-5 mt-sm-5 mt-md-0">
                            <h3>{mainContent[2].heading}</h3>
                        </div>
                        <p>{mainContent[2].text}</p>
                    </div>
                    <div className="col-md-3">
                        <div class="col-md-6 mb-md-5 mt-sm-5 mt-md-0">
                            <h3>{mainContent[3].heading}</h3>
                        </div>
                        <p className="mt-5">{mainContent[3].text}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row mt-5 d-flex justify-content-evenly">
                    <div className="col-md-4 order-md-1 order-sm-2 d-flex flex-column justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div>
                            <h2 className="lh-lg">
                                {mainContent[4].heading}
                            </h2>
                            <p className="lh-lg">
                                {mainContent[4].text}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 order-sm-1 order-md-2" data-aos="fade-down" data-aos-duration="3000">
                        <img src="https://picsum.photos/id/254/400/400" className="rounded img-fluid"/>
                    </div>
            </div>
            <div className="row d-flex justify-content-evenly">
                <div className="col-md-4 order-md-1 order-sm-1" data-aos="fade-up" data-aos-duration="3000">
                     <img src="https://picsum.photos/id/255/400/400" className="rounded img-fluid"/>
                </div>
                <div className="col-md-4 order-md-2 order-sm-2 d-flex flex-column justify-content-around" data-aos="fade-down" data-aos-duration="3000">
                    <div>
                        <h2 className="lh-lg">
                            {mainContent[5].heading}
                        </h2>
                        <p className="lh-lg">
                            {mainContent[5].text}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-5 d-flex justify-content-evenly">
                <div className="col-md-4 mt-md-5 order-md-1 order-sm-2 d-flex flex-column justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                    <div>
                        <h2 className="lh-lg">
                            {mainContent[6].heading}
                        </h2>
                            <p className="lh-lg">
                                {mainContent[6].text}
                            </p>
                    </div>
                </div>
                <div className="col-md-4 order-sm-1 order-md-2" data-aos="fade-down" data-aos-duration="3000">
                     <img src="https://picsum.photos/id/256/400/400" className="rounded img-fluid"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Main;
