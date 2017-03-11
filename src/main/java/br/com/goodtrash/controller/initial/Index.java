/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.goodtrash.controller.initial;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

/**
 *
 * @author Ruan Osorio
 */
@RequestScoped
@ManagedBean
public class Index {

    /*
     * ManagedBean são objetos gerenciados pelo container, neste ManagedBean
     * é usado pelo JSF até terminar a requisição HTTP request-response.
     */
    /*
     * @PostConstruct, o objetivo desta anotação é 
     * faz com que o método ( init() neste caso) seja
     * invocado quando o bean é criado pela primeira vez.
     */
    @PostConstruct
    public void init() {
        System.out.println("Bean executado!");
    }

    public String getMessage() {
        return "Hello World JSF!"
                + "Olá Mundo JSF!";
    }
}
