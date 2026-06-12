package io.spring.image.demo.controller;

import io.spring.image.demo.domain.entity.Image;
import io.spring.image.demo.domain.enums.ImageExtension;
import io.spring.image.demo.domain.service.ImageService;
import io.spring.image.demo.infra.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.List;


@Service
    @RequiredArgsConstructor
    public class ImageServiceImpl implements ImageService {

        private final ImageRepository repository;

        @Override
        @Transactional
        public Image save(Image image) {
            return null;
        }

    @Override
    public Optional<Image> getById(String id) {
        return repository.findById(id);
    }

    public List<Image> search(ImageExtension extension, String query){
        return repository.findByExtensionAndNameOrTagsLike(extension, query);
    }
}


