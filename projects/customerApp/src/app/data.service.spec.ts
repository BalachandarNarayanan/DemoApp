import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('DataService', () => {
  let httpTestingController: HttpTestingController;
  let service: DataService;
  let reportList = [
    {
      "id": "1",
      "report_name": "Customers Service Report"
    },
    {
      "id": "2",
      "report_name": "Customers Performance Report"
    },
    {
      "id": "3",
      "report_name": "Customers Transaction Details"
    },
    {
      "id": "4",
      "report_name": "Customers Shipment report"
    }
  ]
  let profileList = [
    {
      "id": "1",
      "name": "Admin Settings"
    },
    {
      "id": "2",
      "name": "Login user details"
    },
    {
      "id": "3",
      "name": "Language changes"
    },
    {
      "id": "4",
      "name": "Logout"
    }
  ]
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getReportList', () => {
    service.getReportList().subscribe((data: any) => {
      expect(data).toEqual(reportList);
    });
    const req = httpTestingController.expectOne('/api/reportList');
    expect(req.request.method).toEqual('GET');
    req.flush(reportList);
  });

  it('should call getProfileList', () => {
    service.getProfileList().subscribe((data: any) => {
      expect(data).toEqual(profileList);
    });
    const req = httpTestingController.expectOne('/api/profileMenu');
    expect(req.request.method).toEqual('GET');
    req.flush(profileList);
  });


  afterEach(() => {
    httpTestingController.verify();
  });
});
