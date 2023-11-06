package com.example.demo.services;
//package com.example.demo.services;

import java.util.List;
import java.util.Set;

import com.example.demo.entities.TypeGroup;
import com.example.demo.repositories.GroupRepository;
import com.example.demo.repositories.TypeGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Group;
import com.example.demo.entities.Person;
import com.example.demo.repositories.PersonRepository;


@Service
public class TypeGroupService {

        @Autowired
        private TypeGroupRepository typeGroupRepository;

        @Autowired
        private GroupRepository groupRepository;




}
