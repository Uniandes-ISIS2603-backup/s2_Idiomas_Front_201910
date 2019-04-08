/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ComentarioBlogService } from '../comentario-blog.service';
import { ComentarioBlog } from '../comentario-blog';


@Component({
    selector: 'app-comentario-blog-detail',
    templateUrl: './comentario-blog-detail.component.html',
    styleUrls: ['./comentario-blog-detail.component.css']
})
export class ComentarioBlogDetailComponent implements OnInit {

    /**
    * The component's constructor
    * @param comentarioBlogService The comentarioBlog's service
    * @param route The route element which helps to obtain the comentarioBlog's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private comentarioBlogService: ComentarioBlogService,
        private route: ActivatedRoute
    ) { }

    /**
    * The comentarioBlog whose details we want to show
    */
    comentarioBlog: ComentarioBlog;



    /**
    * The comentarioBlog's id retrieved from the address
    */
    comentarioBlog_id: number;

    /**
    * The method which retrieves the books of an comentarioBlog
    */
    getComentarioBlogDetail(): void {
        this.comentarioBlogService.getComentarioBlogDetail(this.comentarioBlog_id)
            .subscribe(comentarioBlog => {
                this.comentarioBlog = comentarioBlog
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the comentarioBlog so it is never considered as undefined
    */
    ngOnInit() {
        this.comentarioBlog_id = +this.route.snapshot.paramMap.get('id');
        this.comentarioBlog = new ComentarioBlog();
        this.getComentarioBlogDetail();
    }

}

