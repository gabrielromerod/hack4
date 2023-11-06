package com.example.demo.dto;

public class GroupDTO {

        private Long id;
        private String name;
        private String type;

        public GroupDTO() {}

        public GroupDTO(Long id, String name, String type) {
            this.id = id;
            this.name = name;
            this.type = type;
        }

        public GroupDTO(Long id, String name) {
            this.id = id;
            this.name = name;
        }

        public GroupDTO(String name, String type) {
            this.name = name;
            this.type = type;
        }

        public GroupDTO(String name) {
            this.name = name;
        }

        public Long getId() {
            return id;
        }

        public String getName() {
            return this.name;
        }

        public String getType() {
            return type;
        }

        public void setId(Long id) {
            this.id = id;
        }

    //setters

    public void setName(String name) {
        this.name = name;
    }
}
