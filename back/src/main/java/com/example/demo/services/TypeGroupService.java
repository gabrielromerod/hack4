package com.example.demo.services;
//package com.example.demo.services;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.example.demo.dto.GroupDTO;
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

        public List<TypeGroup> getAllTypeGroups() {
            return typeGroupRepository.findAll();
        }

        public List<GroupDTO> getAllGroups(Long typeGroupId) {
                List<Group> allGroups = typeGroupRepository.getAllGroupsById(typeGroupId);

                // Map Group entities to GroupDTO objects
                List<GroupDTO> groupDTOs = allGroups.stream()
                        .map(this::mapGroupToDTO)
                        .collect(Collectors.toList());

                return groupDTOs;
        }

        private GroupDTO mapGroupToDTO(Group group) {
                GroupDTO groupDTO = new GroupDTO();
                groupDTO.setId(group.getId());
                groupDTO.setName(group.getName());
                // Map other properties from the Group entity to the DTO

                return groupDTO;
        }


}
