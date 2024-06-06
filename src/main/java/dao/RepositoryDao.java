/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dao;

import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author steph18
 * @param <E>
 * @param <ID>
 */
@Stateless
public abstract class RepositoryDao<E extends Serializable, ID>{

    @PersistenceContext
    protected EntityManager em;

    public abstract Class<E> getEntityClass();

    public abstract ID getId(E entity);

    public void save(E entity){
        this.em.persist(entity);
    }
    public void update(E entity){
        this.em.merge(entity);
    };
    public void delete(ID id){
        this.em.remove(this.findById(id));
    };
    public E findById(ID id){
        return this.em.find(this.getEntityClass(), id);
    }
    public List<E> findAll(){
        return new ArrayList<>();
    }
}
