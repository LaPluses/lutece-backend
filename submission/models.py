from django.db import models

from judge.case.models import AbstractCase
from submission.attachinfo.models import AbstractAttachInfo
from submission.basesubmission.models import AbstractSubmission
from submission.constant import MAX_CODE_LENGTH


class SubmissionAttachInfo(AbstractAttachInfo):
    cases_count = models.IntegerField(default=0)
    time_cost = models.IntegerField(default=0)
    memory_cost = models.IntegerField(default=0)


class Submission(AbstractSubmission):
    code = models.TextField(max_length=MAX_CODE_LENGTH, blank=True)
    attach_info = models.OneToOneField(SubmissionAttachInfo, on_delete=models.CASCADE)
    # Used to divide the base class and subclass
    submission_type = models.IntegerField(default=0)

    def __str__(self):
        return f'<Submission:{self.pk}>'

    def get_judge_field(self):
        return {
            'submission_id': self.pk,
            'language': self.language.full,
            'code': self.code,
            'problem': self.problem.pk,
            'time_limit': self.problem.limitation.time_limit,
            'memory_limit': self.problem.limitation.time_limit,
            'checker': self.problem.checker.full
        }


class SubmissionCase(AbstractCase):
    submission = models.ForeignKey(Submission, on_delete=models.SET_NULL, null=True)
