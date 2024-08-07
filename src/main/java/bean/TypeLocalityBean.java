/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package bean;

import entities.TypeLocality;
import jakarta.ejb.EJB;
import jakarta.faces.view.ViewScoped;
import jakarta.inject.Named;
import java.util.ArrayList;
import java.util.List;
import service.interfaces.GenericServiceLocal;
import service.interfaces.TypeLocalityServiceLocal;

/**
 * @author steph18
 */
@Named
@ViewScoped
public class TypeLocalityBean extends GenericBean<TypeLocality, Integer> {

    @EJB
    private TypeLocalityServiceLocal typeLocalityService;
    
    private List<TypeLocality> typesLocalities = new ArrayList<>();

    @Override
    public GenericServiceLocal<TypeLocality, Integer> getService() {
        return typeLocalityService;
    }

    @Override
    public void initAdd() {
        this.entity = new TypeLocality();
    }

    @Override
    public void initEntity() {
        super.initEntity();
        typesLocalities = typeLocalityService.getAll();
    }

    @Override
    public boolean canAdd() {
        return true;
    }

    @Override
    public boolean canDelete() {
        return true;
    }

    @Override
    public boolean canDetails() {
        return true;
    }

    @Override
    public boolean canUpdate() {
        return true;
    }

    public List<TypeLocality> getTypesLocalities() {
        return typesLocalities;
    }  

}
