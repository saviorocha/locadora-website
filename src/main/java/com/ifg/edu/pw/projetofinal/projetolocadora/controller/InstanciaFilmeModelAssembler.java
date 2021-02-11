package com.ifg.edu.pw.projetofinal.projetolocadora.controller;

import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;

import com.ifg.edu.pw.projetofinal.projetolocadora.model.Filme;
import com.ifg.edu.pw.projetofinal.projetolocadora.model.InstanciaFilme;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@Component
public class InstanciaFilmeModelAssembler implements RepresentationModelAssembler<InstanciaFilme, EntityModel<InstanciaFilme>> {

	@Override
	public EntityModel<InstanciaFilme> toModel(InstanciaFilme instanciaFilme) {
		return EntityModel.of(instanciaFilme,
		        linkTo(methodOn(InstanciaFilmeController.class).one(instanciaFilme.getId())).withSelfRel(),
		        linkTo(methodOn(InstanciaFilmeController.class).all()).withRel("instancia de filme")
		);
	}	
}
