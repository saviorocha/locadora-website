package com.ifg.edu.pw.projetofinal.projetolocadora.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.ifg.edu.pw.projetofinal.projetolocadora.model.Filme;

@RepositoryRestResource(collectionResourceRel = "filmes", path = "filmes")
public interface FilmeRepository extends MongoRepository<Filme, String>{

}
