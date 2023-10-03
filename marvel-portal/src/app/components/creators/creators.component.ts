import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { Component } from '@angular/core';
import { Creator } from 'src/app/models/creator.model';
import { CreatorsService } from 'src/app/services/creators.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent {
  creatorsList: Array<Creator> = [];
  creatorStep: 'list' | 'details' = 'list';
  creator: any;
  loading: boolean = false;

  constructor(
    private apiMarvel: ApiMarvelService,
    private creatorsService: CreatorsService
  ) {
    /* this.creatorsList = [
      {
        id: 1,
        fullName: 'Johnson Gallak',
        thumbnail: '../../../assets/creator.jpg'
      },
      {
        id: 1,
        fullName: 'Johnson Gallak',
        thumbnail: '../../../assets/creator.jpg'
      },
      {
        id: 1,
        fullName: 'Johnson Gallak',
        thumbnail: '../../../assets/creator.jpg'
      },
      {
        id: 1,
        fullName: 'Johnson Gallak',
        thumbnail: '../../../assets/creator.jpg'
      },
      {
        id: 1,
        fullName: 'Johnson Gallak',
        thumbnail: '../../../assets/creator.jpg'
      },
      {
        id: 1,
        fullName: 'Johnson Gallak',
        thumbnail: '../../../assets/creator.jpg'
      },
    ] */
  }

  ngOnInit() {
    this.getCreators();
  }

  getCreators() {
    this.loading = true;
    if(this.creatorsService.creatorsArray.length > 0) {
      this.creatorsList = this.creatorsService.creatorsArray;
      this.loading = false;
      return;
    }
    this.apiMarvel.getCreators().subscribe((data: any) => {
      this.loading = false;
      console.log('show me the data inside events', data.data?.results);
      for(let item of data.data?.results) {
        let creator: Creator = {
          id: item.id,
          fullName: item.fullName,
          thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
        }
        this.creatorsService.addToCreatorsList(creator);
        console.log('show me the creator', creator);
        //this.creatorsList.push(creator);
      }
      this.creatorsList = this.creatorsService.creatorsArray;
    });
  }

  getCreator(id: number) {
    console.log('getting creator id:', id);
    //let comic = this.apiMarvel.getComicsById(id);
    this.apiMarvel.getCreatorById(id).subscribe((data: any) => {
      console.log('show me the data from creator', data);
      let creator = data.data.results[0];
      this.creator = {
        thumbnail: `${creator.thumbnail.path}.${creator.thumbnail.extension}`,
        title: creator.title
      }
    });
    //console.log('show me the comic', comic);
  }

  openCreator(creator: any) {
    console.log('comic clicada', creator);
    /* this.openDetailsComic.emit({
      type: 'comic',
      element: comic
    }); */
    this.creatorStep = 'details';
    this.getCreator(creator.id);
    //this.router.navigate(['/details']);
  }

  goBack() {
    this.creatorStep = 'list';
    this.creator = {};
  }
}
