import Hero from './Hero';

const Home = () => {
  return (
    <div>
      <Hero text='Bienvenue à Browser Movie' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
              explicabo. Obcaecati assumenda beatae, exercitationem impedit
              suscipit nihil nobis veritatis itaque magni? Maxime tempora illo
              tempore fuga voluptatem ad expedita repellat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
