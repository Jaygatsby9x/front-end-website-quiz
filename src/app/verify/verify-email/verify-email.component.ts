import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {IResponse} from '../../interfaces/iresponse';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  id;

  constructor(private routerMap: ActivatedRoute, private authService: AuthService, private router: Router, private toast: ToastrService) {
  }

  ngOnInit() {
    this.getId();
    this.authService.verifyAccount(this.id).subscribe((response: IResponse) => {
      this.router.navigate(['']);
      this.toast.success('chào mừng bạn đến với hệ thống quiz xuyên lục địa', 'Kích hoạt tài khoản thành công');
    }, error => {
      this.router.navigate(['/notfound']);
      this.toast.warning('tài khoản bạn muốn kích hoạt không tồn tại', 'Có gì đó sai lầm ở đây');

    });
  }

  getId() {
    this.id = this.routerMap.snapshot.paramMap.get('id');
  }

}
