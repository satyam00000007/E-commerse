import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('nav') slider !: NgImageSliderComponent;

  productlist:any;

  imageObject: Array<object> = [
    {
      image: '../../../assets/Slider/sliderA/slider-01.jpg',
      thumbImage: '../../../assets/Slider/sliderA/slider-01.jpg',
    },
    {
      image: '../../../assets/Slider/sliderA/slider-02.jpg',
      thumbImage: '../../../assets/Slider/sliderA/slider-02.jpg',
      alt: 'alt of image',
    },
    {
      image: '../../../assets/Slider/sliderA/slider-03.jpg',
      thumbImage: '../../../assets/Slider/sliderA/slider-03.jpg',
      alt: 'alt of image',
    }
  ];

  imageSize = {width: `${100}%`, height: `${100}%`, space: 3}

    constructor(private apiService : ApiService){
        this.imageObject.push()
    }

    ngOnInit(): void {

      this.apiService.get("products/category/smartphones?limit=3").subscribe(
        {
          next : (res:any) => {
            console.log(res)
            this.productlist = res?.products;

          },
          error : (err) => console.log(err)
        }
      )
      
    }

    ngAfterViewInit(): void {
      console.log(this.slider)
    }


  }
