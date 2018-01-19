
import Mock from 'mockjs';

let diagnoseArr = ['住院观察', '一切正常', '保守治疗'];
let patientInformation = ['轻微病患','重症','患病好多年'];

Mock.mock('http://192.168.0.116:8000/api/v1/patients/?filters=unconfirmed', {
    "patients|20-25":[{
        'name': '@cname',
        'id|+1': 88,
        'age|30-85': 0,
        'sex|1': true,
        'region|1':['肺部','腹部','肝部'],
        'method|1':['CT','MRI','CR'],
        'certified|1': true,
        'cases|0-5':[{
            'id|+1': 1,
            'diagnose|1': diagnoseArr,
            'startDate': '@DATE',
            'endDate': '@DATE',
            'doctorName': '@cname',
            'patientInformation|1': patientInformation
        }],
        'historyIco|0-5':[{
            'id|+1': 1,
            'checkDate': '@DATE',
            'region|1':['肺部','腹部','肝部'],
            'method|1':['CT','MRI','CR'],
            'patientInformation|1': patientInformation
        }]
    }]
});
Mock.mock('http://192.168.0.116:8000/api/v1/patients/?filters=unconfirmedCT', function(options) {
    return Mock.mock({
        "patients|20-25":[{
            'name': '@cname',
            'id|+1': 88,
            'age|30-85': 0,
            'sex|1': true,
            'region|1':['肺部','腹部','肝部'],
            'method|1':'CT',
            'certified|1': true,
            'cases|0-5':[{
                'id|+1': 1,
                'diagnose|1': diagnoseArr,
                'startDate': '@DATE',
                'endDate': '@DATE',
                'doctorName': '@cname',
                'patientInformation|1': patientInformation
            }],
            'historyIco|0-5':[{
                'checkDate': '@DATE',
                'region|1':['肺部','腹部','肝部'],
                'method|1':['CT','MRI','CR'],
                'patientInformation|1': patientInformation
            }]
        }]
    });
});
Mock.mock('http://192.168.0.116:8000/api/v1/patients/?filters=unconfirmedMRI', {
    "patients|20-25":[{
        'name': '@cname',
        'id|+1': 88,
        'age|30-85': 0,
        'sex|1': true,
        'region|1':['肺部','腹部','肝部'],
        'method|1':'MRI',
        'certified|1': true,
        'cases|0-5':[{
            'id|+1': 1,
            'diagnose|1': diagnoseArr,
            'startDate': '@DATE',
            'endDate': '@DATE',
            'doctorName': '@cname',
            'patientInformation|1': patientInformation
        }],
        'historyIco|0-5':[{
            'checkDate': '@DATE',
            'region|1':['肺部','腹部','肝部'],
            'method|1':['CT','MRI','CR'],
            'patientInformation|1': patientInformation
        }]
    }]
});

Mock.mock('http://192.168.0.116:8000/api/v1/patients/?filters=unconfirmedCR', {
    "patients|20-25":[{
        'name': '@cname',
        'id|+1': 88,
        'age|30-85': 0,
        'sex|1': true,
        'region|1':['肺部','腹部','肝部'],
        'method|1':['CT','MRI','CR'],
        'certified|1': true,
        'cases|0-5':[{
            'id|+1': 1,
            'diagnose|1': diagnoseArr,
            'startDate': '@DATE',
            'endDate': '@DATE',
            'doctorName': '@cname',
            'patientInformation|1': patientInformation
        }],
        'historyIco|0-5':[{
            'checkDate': '@DATE',
            'region|1':['肺部','腹部','肝部'],
            'method|1':['CT','MRI','CR'],
            'patientInformation|1': patientInformation
        }]
    }]
});

Mock.mock('http://192.168.0.116:8000/api/v1/patients/?filters=unconfirmedCR', {
    "patients|20-25":[{
        'name': '@cname',
        'id|+1': 88,
        'age|30-85': 0,
        'sex|1': true,
        'region|1':['肺部','腹部','肝部'],
        'method|1':'CR',
        'certified|1': true,
        'cases|0-5':[{
            'id|+1': 1,
            'diagnose|1': diagnoseArr,
            'startDate': '@DATE',
            'endDate': '@DATE',
            'doctorName': '@cname',
            'patientInformation|1': patientInformation
        }],
        'historyIco|0-5':[{
            'checkDate': '@DATE',
            'region|1':['肺部','腹部','肝部'],
            'method|1':['CT','MRI','CR'],
            'patientInformation|1': patientInformation
        }]
    }]
});

Mock.mock('http://192.168.0.116:8000/api/v1/patients/?filters=historyCT', {
    "patients|20-25":[{
        'name': '@cname',
        'id|+1': 88,
        'age|30-85': 0,
        'sex|1': true,
        'region|1':['肺部','腹部','肝部'],
        'method|1':['CT','MRI','CR'],
        'certified|1': true,
        'cases|0-5':[{
            'id|+1': 1,
            'diagnose|1': diagnoseArr,
            'startDate': '@DATE',
            'endDate': '@DATE',
            'doctorName': '@cname',
            'patientInformation|1': patientInformation
        }],
        'historyIco|0-5':[{
            'checkDate': '@DATE',
            'region|1':['肺部','腹部','肝部'],
            'method|1':['CT','MRI','CR'],
            'patientInformation|1': patientInformation
        }]
    }]
});

Mock.mock('http://192.168.0.116:8000/api/v1/patients/?filters=historyMRI', {
    "patients|20-25":[{
        'name': '@cname',
        'id|+1': 88,
        'age|30-85': 0,
        'sex|1': true,
        'region|1':['肺部','腹部','肝部'],
        'method|1':['CT','MRI','CR'],
        'certified|1': true,
        'cases|0-5':[{
            'id|+1': 1,
            'diagnose|1': diagnoseArr,
            'startDate': '@DATE',
            'endDate': '@DATE',
            'doctorName': '@cname',
            'patientInformation|1': patientInformation
        }],
        'historyIco|0-5':[{
            'checkDate': '@DATE',
            'region|1':['肺部','腹部','肝部'],
            'method|1':['CT','MRI','CR'],
            'patientInformation|1': patientInformation
        }]
    }]
});

Mock.mock('http://192.168.0.116:8000/api/v1/patients/?filters=search', {
    "patients|1":[{
        'name': '@cname',
        'id|+1': 88,
        'age|30-85': 0,
        'sex|1': true,
        'region|1':['肺部','腹部','肝部'],
        'method|1':['CT','MRI','CR'],
        'certified|1': true,
        'cases|0-5':[{
            'id|+1': 1,
            'diagnose|1': diagnoseArr,
            'startDate': '@DATE',
            'endDate': '@DATE',
            'doctorName': '@cname',
            'patientInformation|1': patientInformation
        }],
        'historyIco|0-5':[{
            'checkDate': '@DATE',
            'region|1':['肺部','腹部','肝部'],
            'method|1':['CT','MRI','CR'],
            'patientInformation|1': patientInformation
        }]
    }]
});

Mock.setup({
    timeout: '500-1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
});
