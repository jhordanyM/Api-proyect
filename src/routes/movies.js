const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('./sample.json');


router.get('/', (req, res) => {
    res.json(movies);

});

router.post('/', (req, res) => {
    const { title, manager, year, actor} = req.body
    if (title && manager && year && actor ){
        const id =  movies.length + 1;
        const newMovie = {...req.body, id}
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.status(500).json({error: 'there was an error'});
    }

    res. send('movie created');
    
  });

  router.delete('/:id', (req, res) => {
      const {id} = req.params;
      _.each(movies, (movie, i) => {
          if (movie.id == id) {
              movies.splice(i, 1)
          }
      });
      res.send(movies);
  });

  router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { title, manager, year, actor} = req.body;
    if (title && manager && year && actor) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.manager = manager;
                movie.year = year;
                movie.actor = actor;
            }
        });
    res.json(movies);
    }else{
        res.status(500).json({error: 'there was an error'});
    }
});
    
module.exports = router;