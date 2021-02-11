package com.ifg.edu.pw.projetofinal.projetolocadora.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.ifg.edu.pw.projetofinal.projetolocadora.model.InstanciaFilme;

@RepositoryRestResource(collectionResourceRel = "instancias", path = "instancias")
public interface InstanciaFilmeRepository extends MongoRepository<InstanciaFilme, String>{

}
