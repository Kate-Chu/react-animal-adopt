const Card = (props) => {
  return (
    <div>
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
